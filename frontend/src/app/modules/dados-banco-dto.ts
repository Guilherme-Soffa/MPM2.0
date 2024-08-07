import { UsuarioDTO } from './usuario-dto';
import { AntecedenteDTO } from "./antecedente-dto";
import { ClasseDTO } from "./classe-dto";
import { OrigemDTO } from "./origem-dto";
import { RacaDTO } from "./raca-dto";

export interface DadosBancoDTO{
  usuario: UsuarioDTO[];
  classe: ClasseDTO[];
  raca: RacaDTO[];
  origem: OrigemDTO[];
  antecedente: AntecedenteDTO[];
}
