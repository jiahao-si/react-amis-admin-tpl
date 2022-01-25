import { Schema } from 'amis/lib/types';
import AmisRenderer from '../components/AmisRenderer';
import React = require('react');

/**
 * schema 可以是 js object 也可以是从 amis 编辑器中 copy 出来的 json 字符串
 * @param schema
 * @returns
 */
export default function (schema: Schema | string): React.FunctionComponent {
  return (props: any) => {
    let finalSchema = schema;
    try {
      if (typeof schema === 'string') {
        finalSchema = JSON.parse(schema);
      }
    } catch (error) {
      console.error('JSON Schema Parse Error, Please Check!', error);
    }
    return <AmisRenderer schema={finalSchema} {...props} />;
  };
}
