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




export default function Page(): React.JSX.Element {

  const searchParams = useSearchParams();
  const userId = searchParams.get('id');
  const [user, setUser] = React.useState<User>({ id: '', photo: '', firstName: '', lastName: '', birthDate: new Date(), email: '', phone: '', linkedin: '', team: '', employmentStartDate: new Date(), language: '', seniority: '', area: '', office: ''});
  const [manifestCompetences, setManifestCompetences] = React.useState<ManifestTableContent[]>([]);
  
  React.useEffect(() => {
    if (!userId) {
      return;
    }
    else {
      accountInfo.getAccountInfo(userId).then((data) => {
        setUser(data);
      });

      accountInfo.getManifestCompListByUser(userId).then((data) => {
        setManifestCompetences(data);
      });
    }
    
  }, [userId]);

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
              <Typography variant="h4">Manifestações</Typography>
              <ManifestTable rows={manifestCompetences} />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
