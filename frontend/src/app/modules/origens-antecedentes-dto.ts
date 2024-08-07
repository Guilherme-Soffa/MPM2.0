import { AntecedenteDTO } from './antecedente-dto';
import { OrigemDTO } from './origem-dto';

export interface OrigensAntecedentesDTO{
  origens: OrigemDTO[];
  antecedentes: AntecedenteDTO[];
}
