import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import ScoopOptions from './ScoopOption';
import ToppingOption from './ToppingOption';

export default function Options({ optionType }: { optionType: string }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // optionType is 'scoops' or 'toppings'
    axios.get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch(() => {
        // TODO: handle error
      });
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOption;

  // @ts-ignore
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
    // the key is the array index of the itemComponent
  ));

  return <Row>{optionItems}</Row>;
}
