/*
 * @Author: heyong
 * @Date: 2024-04-09 14:04:13
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-09 16:12:02
 */
import { Button } from 'antd-mobile'
import styled from 'styled-components'

const Home = () => {
    return (
        <Wrapper>
            <span>样式</span>
            <Button color='primary'>按钮</Button>
        </Wrapper>
    );
};

export default Home;

const Wrapper = styled.div`
    color: red;
`