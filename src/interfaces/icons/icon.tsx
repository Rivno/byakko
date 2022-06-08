import React, { ComponentProps, useMemo } from 'react';
import { IconName, iconMap } from './iconMap';
import { SIcon } from './styled';

type Props = Omit<ComponentProps<'i'>, 'ref'> & {
    name: IconName;
    width?: string;
    height?: string;
  };

export const Icon = ({ name, width, height, ...props }: Props): JSX.Element => {
    const SvgIcon = useMemo(() => iconMap[name], [name]);

    return (
        <SIcon $width={width} $height={height} {...props}>
            <SvgIcon />
        </SIcon>
    );
};
