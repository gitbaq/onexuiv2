import React from "react";

import {
    Card,
    Typography,
} from '@material-ui/core';


async function GetData() {
    // const ERC20Basic = await ethers.getContractFactory("ERC20");
    // let token = await ERC20Basic.attach("0x53b8955956DE9Df02C10477d3231F78c7b7Db423");
    // let bal1 = await token.balanceOf("0xFc1637C7217B698385f20e8DD6a19Be9Fd8d62E2") / 1e24;
    // let token2 = await ERC20Basic.attach("0x4ffd88671b596eb6fc3d9064ed913c5a71651408");
    // let bal2 = await token2.balanceOf("0xFc1637C7217B698385f20e8DD6a19Be9Fd8d62E2");



}

function currDate() {
    return new Date().toLocaleString('en-US');
}



export default function getData() {




    return (
        <div>
            <Card >

                <Typography color='secondary' variant={'h4'} noWrap  >
                    Get Data
                </Typography>
            </Card>

        </div>
    )
}
