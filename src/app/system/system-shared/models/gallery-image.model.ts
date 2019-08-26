import {PositionEnum} from '../enums/position.enum';

export class GalleryImage {
  constructor(
    private imageLink: string,
    public description: string,
    public position: {[key in PositionEnum]: string} = {[PositionEnum.Top] : '0', [PositionEnum.Left]: '0'},
    public color: string = 'black',
    public id: string = ''
  ) {
  }
}
