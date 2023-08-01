export class project

{
    public name: string = "";
    public email: string = "";

    public policies: PolicyEntry[] = [];
 
 
}

  
export class PolicyEntry {
    
    public relationship: string = "";
    public lifecover: string = "";
    public duration: number = 0;
    public time: string = "";
    public tot: number = 0;
    public status:string="";
    public nominee:string ="";
    public isclaimed:boolean=false;
  }
