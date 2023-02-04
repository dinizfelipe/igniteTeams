import { Container, Icon, Name } from './style';

import { ButtonIcon } from '@components/ButtonIcon';

type Props = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>
      <Icon
        name="person"
        size={32}
      />
      <Name>{name}</Name>
      <ButtonIcon
        icon="close"
        type="SECONDARY"
        onPress={onRemove}
      />
    </Container>
  );
}
