/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import compose from 'recompose/compose'
import defaultProps from 'recompose/defaultProps'
import pure from 'recompose/pure'
import { withTheme, withDimensions } from '@nivo/core'
import { PieDefaultProps } from './props'

export default Component =>
    compose(
        defaultProps(PieDefaultProps),
        withTheme(),
        withDimensions(),
        /*
        withPropsOnChange(
            ['enhancedData', 'defs', 'fill'],
            ({ enhancedData: _enhancedData, defs, fill }) => {
                const enhancedData = _enhancedData.map(datum => ({ ...datum }))
                const boundDefs = bindDefs(defs, enhancedData, fill)

                return {
                    enhancedData,
                    boundDefs,
                    legendData: enhancedData.map(datum => ({
                        label: datum.label,
                        fill: datum.fill || datum.color,
                    })),
                }
            }
        ),
        */
        pure
    )(Component)
