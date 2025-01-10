/*
 * @Author: heyong
 * @Date: 2024-04-09 14:15:46
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-09 15:09:41
 */
import { ResultPage } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigation = useNavigate();
    return (
        <ResultPage
            status="error"
            title="404"
            description="对不起, 您访问的页面不存在."
            primaryButtonText="返回首页"
            onPrimaryButtonClick={
                () => {
                    navigation('/');
                }
            }
        />
    );
};

export default Error;
