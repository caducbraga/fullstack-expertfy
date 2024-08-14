"use client"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { AccountDetailsForm } from '@/components/search/account/account-details-form';
import { AccountInfo } from '@/components/search/account/account-info';
import { User } from '@/types/user';
import { useSearchParams } from 'next/navigation'
import { accountInfo } from '@/lib/account/account';
import { ManifestTable } from '@/components/search/account/account-manifest-table';
import type { ManifestTableContent } from '@/components/search/account/account-manifest-table';
import AccountScorePanel from '@/components/search/account/account-score-panel';
import type { PanelTableScoreProps } from '@/components/search/account/account-score-panel';


interface CountSkillScore{
  id: string;
  name: string;
  total: number;
}

export default function Page(): React.JSX.Element {

  const searchParams = useSearchParams();
  const userId = searchParams.get('id');
  const [user, setUser] = React.useState<User>({ id: '', photo: '', firstName: '', lastName: '', birthDate: new Date(), email: '', phone: '', linkedin: '', team: '', employmentStartDate: new Date(), language: '', seniority: '', area: '', office: ''});
  const [manifestCompetences, setManifestCompetences] = React.useState<ManifestTableContent[]>([]);
  const [scorePanel, setScorePanel] = React.useState<PanelTableScoreProps[]>([]);

  React.useEffect(() => {
    if (!userId) {
      return;
    }
    else {
      accountInfo.getAccountInfo(userId).then((data) => {
        setUser(data);
      });

      accountInfo.getTotalScoreForAll().then((total: CountSkillScore[]) => {
        accountInfo.getCountScoreByUser(userId).then((data : CountSkillScore[]) => {

          setScorePanel(data.map((item) => {
            return {
              actual_value: item.total,
              total_value: total.find((element) => element.id === item.id)?.total ?? 0,
              name: item.name
            }
          }))
        })
      })

      accountInfo.getTableListByUser(userId).then((data) => {
        setManifestCompetences(data);
      })
    }

  }, [userId]);

  React.useEffect(() => {
    console.log(scorePanel)
  }, [scorePanel]);

  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Conta</Typography>
      </div>
      <Grid container spacing={3}>
        <Grid xs={12} >
          <AccountInfo  {...user} />
        </Grid>

        <Grid xs={12} >
          <AccountDetailsForm {...user}/>
        </Grid>

        <Grid xs={12} >
          <Stack direction="row" spacing={3}>
            {/* competence table */}
            <Stack spacing={3} sx={{ flex: '1 1 auto' }}>
              <Typography variant="h4">Habilidades</Typography>
              <AccountScorePanel score={scorePanel}/>
              <ManifestTable rows={manifestCompetences} />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
