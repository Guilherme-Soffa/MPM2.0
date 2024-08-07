package br.uniceub.rpg.comum.mapper;

import java.util.List;

/**
 * Interface para auxilio no mapstruct
 *
 * @param <D>
 * @param <E>
 */
interface EntityMapper<D, E> {

    E toEntity(D dto);

    D toDto(E entity);

    List<E> toEntity(List<D> dtoList);

    List<D> toDto(List<E> entityList);
}
