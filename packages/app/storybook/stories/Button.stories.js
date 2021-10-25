import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Button } from 'common/Button';
import { BufferView } from './decorators';

storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Button onPress={action('clicked-default')}>Press Me</Button>
  ))
  .add('outline', () => (
    <Button onPress={action('clicked-outline')} outline>Press Me</Button>
  ))
  .add('big', () => (
    <Button onPress={action('clicked-big')} isBig>Press Me</Button>
  ))
