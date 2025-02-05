import { createBucketClient } from '@cosmicjs/sdk';

function getDate() {
    const today = new Date();
  
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1);
    if (month.length == 1) month = "0" + month;
    let day = String(today.getDate())
    if (day.length == 1) day = "0" + day;
  
    return `${year}-${month}-${day}`;
  }

export function getYear() {
    const today = new Date();

    let year = today.getFullYear();
    return String(year);
}

export function getAvailableYears() {
    let years: string[] = [getYear() + " ..."];
    for (let i = Number(getYear())-1; i >= 2004 ; i--){
        years.push(String(i))
    }
    
    return years
}

export const extractTableText = (htmlString: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const cells = doc.querySelectorAll('td');
    return Array.from(cells).map(cell => {
        if(cell.textContent != null && cell.textContent.trim() != null && cell.textContent.trim()!=''){
            return cell.textContent.trim()
        }})
    }

const cosmic = createBucketClient({
    bucketSlug: 'tersicore-v2-tersicore',
    readKey: 'XfrOLrgYlSBJNqtbOuf0jqjYQ5WRUZRtQGiEW2c6rpT5R95A7J'
  })

export async function getRecords(){
    const {objects: records} = await cosmic.objects.find({"type": "artists"})
    .limit(100)
    .props("slug,title,metadata,type")
    .depth(1)
    .sort("-metadata.secolo")

    return records
}

export function MapFromRecords(data: any[]){
    let temp = new Map()
    data.map((item: any) => {
        let secolo = item.metadata.secolo
        if (!temp.has(secolo)) {
            temp.set(secolo, [item.metadata])
        }else{
            temp.get(secolo).push(item.metadata)
        }
    })
    return temp
}

export async function getNextEvents(year: string, next: boolean){
    let upper = ''
    let lower = ''
    if (next){
        lower = getDate();
        upper = `${getYear()+10}-12-31`;
    }else{
        if (year == getYear() + " ..."){
            upper = `${Number(getYear())+2}-12-31`
            lower = `${year}-01-01`
        } else {
            upper = `${year}-12-31`
            lower = `${year}-01-01`
        }
    }

    const {objects: events} = await cosmic.objects.find
        ({"type": "appuntamenti",
        "$and": [
            {
                "metadata.data": {
                    "$lte": upper,
                    "$gte": lower
                }
            }
        ]})
        .limit(20)
        .props("metadata")
        .depth(1)
        .sort("metadata.data")

        return events
  }