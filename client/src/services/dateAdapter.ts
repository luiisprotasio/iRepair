export function localDate(dataISO: string):string{
    const date = new Date(dataISO)
    const localDate= date.toLocaleDateString('pt-BR',{
        timeZone: 'America/Sao_Paulo',
    })
    const localTime= date.toLocaleTimeString('pt-BR',{
        timeZone:'America/Sao_Paulo',
    })
    return `${localDate}, às ${localTime}, horário de Brasília.`
}