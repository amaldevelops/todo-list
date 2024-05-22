import { formatDistance, subDays } from "date-fns";



export class dateFunctions
{



    dateDistance()
    {
        const dateDistance=formatDistance(subDays(new Date(), 1),  new Date(),  { addSuffix: true });
        console.log(dateDistance);


    }
    
}