import { RangeColumn } from '@antv/g2plot';

const data = [
  { type: '分类一', values: [76, 100] },
  { type: '分类二', values: [56, 108] },
  { type: '分类三', values: [38, 129] },
  { type: '分类四', values: [58, 155] },
  { type: '分类五', values: [45, 120] },
  { type: '分类六', values: [23, 99] },
  { type: '分类七', values: [18, 56] },
  { type: '分类八', values: [18, 34] },
];

const columnPlot = new RangeColumn(document.getElementById('container'), {
  title: {
    visible: true,
    text: '区间柱状图',
  },
  data,
  xField: 'type',
  yField: 'values',
});
columnPlot.render();
