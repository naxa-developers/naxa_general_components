import '!style-loader!css-loader!sass-loader!./main.scss';
import '!style-loader!css-loader!sass-loader!./base.scss';
import '!style-loader!css-loader!sass-loader!./grid.scss';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);
