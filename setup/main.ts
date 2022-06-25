import { defineAppSetup } from '@slidev/types'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

export default defineAppSetup(({ app, router }) => {
    // Vue App
    app.use(Antd)
})