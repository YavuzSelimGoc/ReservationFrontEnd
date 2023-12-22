import { BusinessDto } from './../Models/businessDto';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'businessDto'
})
export class BusinessDtoPipe implements PipeTransform {

  transform(value: BusinessDto[], filtertext: string): BusinessDto[] {
    filtertext=filtertext?filtertext.toLocaleLowerCase():""
    return filtertext?value.filter((p:BusinessDto)=>p.businessName.toLocaleLowerCase()
    .indexOf(filtertext)!==-1):value;
  }

}
