import { UsuarioDTO } from './usuario-dto';
import { AntecedenteDTO } from "./antecedente-dto";
import { ClasseDTO } from "./classe-dto";
import { OrigemDTO } from "./origem-dto";
import { RacaDTO } from "./raca-dto";

export interface FichaDTO{
  id: number;
  usuario: UsuarioDTO;
  personagem: string;
  classe: ClasseDTO;
  raca: RacaDTO;
  origem: OrigemDTO;
  antecedente: AntecedenteDTO;
}
