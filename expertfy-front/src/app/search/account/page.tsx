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




export default function Page(): React.JSX.Element {

  const searchParams = useSearchParams();
  const userId = searchParams.get('id');
  const [user, setUser] = React.useState<User>(
    { id: '', photo: '', firstName: '', lastName: '', birthDate: new Date(), email: '', phone: '', linkedin: '', team: '', employmentStartDate: new Date(), language: '', seniority: '', area: '', office: ''});

  // const user = {
  //   id: 'USR-000',
  //   photo: '/assets/avatar.png',
  //   firstName: 'Sofia',
  //   lastName: 'Rivers',
  //   birthDate: new Date(),
  //   email: 'teste@teste.com',
  //   phone: '+55 11 99999-9999',
  //   linkedin: 'https://linkedin.com/in/sofiarivers',
  //   team: 'Desenvolvimento',
  //   employmentStartDate: new Date(),
  //   language: 'en',
  //   seniority: 'Sênior',
  //   area: 'Frontend',
  //   office: 'Desenvolvedor',
  // } as User;
  
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
          <AccountDetailsForm />
        </Grid>
       
        
      </Grid>
    </Stack>
  );
}
