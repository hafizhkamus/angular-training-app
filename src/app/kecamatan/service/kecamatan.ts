import { Provinsi } from '../../provinsi/service/provinsi';
import { Kabupaten } from '../../kabupaten/service/kabupaten';


export class Kecamatan{

    idKecamatan : Number;
    namaKecamatan : string;
    kodeKabupaten : Number;
    idProvinsi : Number;
    kabupaten : Kabupaten;
    provinsi : Provinsi;
}