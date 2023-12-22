import { ReservationDto } from './../Models/reservationDto';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reservationDto'
})
export class ReservationDtoPipe implements PipeTransform {

  // transform(value:  ReservationDto[], filtertext: string): ReservationDto[] {
  //   filtertext=filtertext?filtertext.toLocaleLowerCase():""
  //   return filtertext?value.filter((p:ReservationDto)=>p.businessName.toLocaleLowerCase()
  //   .indexOf(filtertext)!==-1 ||
  //   p.customerName.toLocaleLowerCase().includes(filtertext)):value;
  // }
  transform(value: ReservationDto[], filtertext: string): ReservationDto[] {
    filtertext = filtertext ? filtertext.toLocaleLowerCase() : "";
    return filtertext
      ? value.filter(
          (p: ReservationDto) =>
            p.businessName.toLocaleLowerCase().includes(filtertext) ||
            p.customerName.toLocaleLowerCase().includes(filtertext)
        )
      : value;
  }

}
