import Editor from './editor';
import AutoResize from './plugins/autoResize';
import BlockCodeBlock from './plugins/block/code-block';
import BlockCodeInline from './plugins/block/code-inline';
import BlockQuote from './plugins/block/quote';
import BlockWrap from './plugins/block/wrap';
import Clear from './plugins/clear';
import FontBold from './plugins/font/bold';
import FontItalic from './plugins/font/italic';
import FontStrikethrough from './plugins/font/strikethrough';
import FontUnderline from './plugins/font/underline';
import FullScreen from './plugins/fullScreen';
import Header from './plugins/header';
import Image from './plugins/Image';
import Link from './plugins/link';
import ListOrdered from './plugins/list/ordered';
import ListUnordered from './plugins/list/unordered';
import ModeToggle from './plugins/modeToggle';
import Table from './plugins/table';

// 注册默认插件
Editor.use(Header);
Editor.use(FontBold);
Editor.use(FontItalic);
Editor.use(FontUnderline);
Editor.use(FontStrikethrough);
Editor.use(ListUnordered);
Editor.use(ListOrdered);
Editor.use(BlockQuote);
// Editor.use(BlockWrap);
Editor.use(BlockCodeInline);
Editor.use(BlockCodeBlock);
Editor.use(Table);
Editor.use(Image);
Editor.use(Link);
// Editor.use(Clear);
Editor.use(ModeToggle);
Editor.use(FullScreen);

// 导出声明
// 导出工具组件
export { default as DropList } from './components/DropList/index';
export { PluginComponent, PluginProps } from './plugins/Plugin';
// 导出实用工具
export { default as getDecorated } from './utils/decorate';
// 导出内置插件
export const Plugins = {
  Header,
  FontBold,
  FontItalic,
  FontUnderline,
  FontStrikethrough,
  ListUnordered,
  ListOrdered,
  BlockQuote,
  BlockWrap,
  BlockCodeInline,
  BlockCodeBlock,
  Table,
  Image,
  Link,
  Clear,
  ModeToggle,
  FullScreen,
  AutoResize,
};

// 导出编辑器
export default Editor;
