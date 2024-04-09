'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Unstable_Grid2';
import { User } from '@/types/user';


export function AccountDetailsForm(user: User): React.JSX.Element {
  const formatDateOfBirth = (date: Date): string => {
    const dateObj = new Date(date);
    return dateObj.toISOString().split('T')[0];
  };

  const formatPhoneNumber = (phone: string): string => {
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader title="Detalhes da Conta" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Email</InputLabel>
                <OutlinedInput readOnly defaultValue={'Email'} label="Email" name="email" value={user.email}/>
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Telefone</InputLabel>
                <OutlinedInput readOnly defaultValue={'Telefone'} label="Telefone" name="phone" value={formatPhoneNumber(user.phone)} type="tel" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Data de Nascimento</InputLabel>
                <OutlinedInput
                  readOnly
                  defaultValue={''}
                  value={formatDateOfBirth(user.birthDate)}
                  label="Data de Nascimento"
                  name="birthDate"
                  type="date"
                /> 
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Área</InputLabel>
                <OutlinedInput readOnly defaultValue={'Área'} label="Área" name="area" value={user.area} />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Time</InputLabel>
                <OutlinedInput readOnly defaultValue={'Time'} label="Time" name="team" value={user.team} />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Idioma</InputLabel>
                <OutlinedInput readOnly defaultValue={'Idioma'} label="Idioma" name="language" value={user.language} />
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
}

