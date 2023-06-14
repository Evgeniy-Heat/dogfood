import React from 'react';
import { Table } from 'react-bootstrap';
import Row from './../Row/Row';

export const BasketFull = ({ gds, basket }) => {
  return (
    <div>
      <h1>Корзина</h1>
      {basket.length > 0 && gds.length > 0 && (
        <Table hover>
          <thead>
            <tr>
              <th>Изображение</th>
              <th>Название</th>
              <th>Количество</th>
              <th>Цена</th>
              <th>Цена 2</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((el, i) => (
              <Row key={el.id} {...gds[i]} {...el} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className='text-end fw-bold fs-3'>
                ИТОГО:
              </td>
              <td className='fw-bold fs-3'>
                {basket.reduce((acc, el, i) => {
                  acc += el.cnt * gds[i].price;
                  return acc;
                }, 0)}
                ₽
              </td>
            </tr>
          </tfoot>
        </Table>
      )}
    </div>
  );
};
