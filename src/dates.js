import { formatDistance, subDays } from "date-fns";



export class dateFunctions
{

    //=> "3 days ago"formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });
    //=> "3 days ago"

    dateDistance()
    {
        const dateDistance=formatDistance(subDays(new Date(), 1),  new Date(),  { addSuffix: true });
        console.log(dateDistance);


    }
    
}