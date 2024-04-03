"use client"
import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { config } from '@/config';
import { AccountDetailsForm } from '@/components/search/account/account-details-form';
import { AccountInfo } from '@/components/search/account/account-info';
import { User } from '@/types/user';
import { useSearchParams } from 'next/navigation'
import { accountInfo } from '@/lib/account/account';
import { ManifestTable } from '@/components/search/account/account-manifest-table';




export default function Page(): React.JSX.Element {

  const searchParams = useSearchParams();
  const userId = searchParams.get('id');
  const [user, setUser] = React.useState<User>(
    { id: '', photo: '', firstName: '', lastName: '', birthDate: new Date(), 
    email: '', phone: '', linkedin: '', team: '', employmentStartDate: new Date(), 
    language: '', seniority: '', area: '', office: ''});

  
  React.useEffect(() => {
    if (!userId) {
      return;
    }
    else {
      const user_pr = accountInfo.getAccountInfo(userId).then((data) => {
        setUser(data);
      });
    }
    
  }, [userId]);

  const mockCompetences = [
    { id: '1', competence: 'Competence 1', manifestCompetence: 'Manifest Competence 1' , timestamp: '2024-12-12' },
    { id: '2', competence: 'Competence 2', manifestCompetence: 'Manifest Competence 2' , timestamp: '2024-12-12' },
    { id: '3', competence: 'Competence 3', manifestCompetence: 'Manifest Competence 3' , timestamp: '2024-12-12' },
    { id: '4', competence: 'Competence 4', manifestCompetence: 'Manifest Competence 4' , timestamp: '2024-12-12' },
    { id: '5', competence: 'Competence 5', manifestCompetence: 'Manifest Competence 5' , timestamp: '2024-12-12' },
    { id: '6', competence: 'Competence 6', manifestCompetence: 'Manifest Competence 6' , timestamp: '2024-12-12' },
    { id: '7', competence: 'Competence 7', manifestCompetence: 'Manifest Competence 7' , timestamp: '2024-12-12' },
    { id: '8', competence: 'Competence 8', manifestCompetence: 'Manifest Competence 8' , timestamp: '2024-12-12' },
    { id: '9', competence: 'Competence 9', manifestCompetence: 'Manifest Competence 9' , timestamp: '2024-12-12' },
    { id: '10', competence: 'Competence 10', manifestCompetence: 'Manifest Competence 10' , timestamp: '2024-12-12' },
  ]

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
              <ManifestTable rows={mockCompetences} />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
