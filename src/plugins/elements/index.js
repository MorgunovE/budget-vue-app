// 1
import Vue from 'vue';
// 2
import lang from 'element-ui/lib/locale/lang/en';
// 3
import locale from 'element-ui/lib/locale';
// 4
import 'element-ui/packages/theme-chalk/lib/index.css';
// 5
import {
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Select,
  Option,
} from 'element-ui';
// 6
const elements = [
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Select,
  Option,
];
// 7
locale.use(lang);
//8
elements.forEach(EL => Vue.use(EL, {locale}));
