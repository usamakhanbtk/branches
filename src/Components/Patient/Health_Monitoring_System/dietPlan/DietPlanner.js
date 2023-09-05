
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Paper, Table, TableHead, TableContainer, TableRow, TableCell, Typography, TableBody, Button, Tab, Tabs, Stack } from '@mui/material';
import { Container } from '@mui/system';
import Egg from './images/egg.jpg';
import Orange from './images/orangejuice.jpeg';
import French from './images/frenchtoast.jpeg';
import cake from './images/pancakes.jpeg';
import Scrambledegg from './images/scrambledegg.jpeg';
import Milk from './images/milkglass.jpg';
import Applejuice from './images/applejuice.jpg';
import Hashbrown from './images/hashbrown.jpg';
import Strawbshake from './images/strawbshake.jpg';
import Bananashake from './images/bananashake.jpg';
import Bread from './images/bread.jpg';
import Paratha from './images/paratha.jpg';
import Omelette from './images/omelette.jpg';
import Chesse from './images/chesse.jpg';
import Puri from './images/puri.jpg';
import Channe from './images/channe.jpg';
import Yogurt from './images/yogurt.jpg';
import Tea from './images/tea.jpg';
import Footer from '../../Footer';
import Burgers from './images/burgers.jpg';
import bakedC from './images/bakedC.jpg';
import Beefsteak from './images/beefsteak.jpeg';
import Beansalad from './images/beansalad.jpeg';
import Brownie from './images/brownie.jpeg';
import Cbriyani from './images/cbriyani.jpeg';
import Ccurry from './images/ccurry.jpeg';
import Fish from './images/fish.jpeg';
import Ckebab from './images/ckebab.jpg';
import Pcurry from './images/pcurry.jpeg';
import Pizza from './images/pizza.jpeg';
import Soup from './images/soup.jpeg';
import Gchicken from './images/gchicken.jpeg';
import Lime from './images/lime.jpg';
import Cnoodles from './images/cnoodles.jpg';
import Meatballs from './images/meatballs.jpeg';
import Frice from './images/frice.jpg';
import Csalad from './images/csalad.jpg';
import Avacado from './images/avacado.jpg';
import Russian from './images/russian.jpg';
import Prawns from './images/prawns.jpg';
import Veges from './images/veges.jpg';
import Sandwich from './images/sandwich.jpeg';

const DietPlanner = (props) => {
    const [c,setC] = useState();
    const {protien} = props;
    const [breakfast, setBreakfast] = useState(0);
    const [lunch, setLunch] = useState(0);
    const [dinner, setDinner] = useState(0);
    const [supper, setSupper] = useState(0);
    const [val, setVal] = useState(0);
    const [maintainW, setMaintainW] = useState();
    const [mildWL, setMildWL] = useState();
    const [WL, setWL] = useState();
    const [extremeWL, setExtremeWL] = useState();
    const [dietPlanShow, setDietPlanShow] = useState(false);
    const calculation = e => {
        const amr = props.amr;
        const a = (35 * amr) / 100;
        setC(a);
        setMaintainW(amr.toFixed(2));
        const mild = (90 * amr) / 100;
        const weightLoss = (80 * amr) / 100;
        const extreme = (60 * amr) / 100;
        setMildWL(mild.toFixed(2));
        setWL(weightLoss.toFixed(2));
        setExtremeWL(extreme.toFixed(2));
        console.log(maintainW);
        console.log(mildWL);
        console.log(WL);
        console.log(extremeWL);
    }
    useEffect(() => {
        calculation();
    }, [])
    const data = [
        {
            weight: "Maintain Weight",
            calorie:maintainW,
            Protein:protien,
            Fat:c,
            percentage: "0%"
        },
        {
            weight: "Mild Weight Loss",
            calorie: mildWL,
            Protein: (90 * protien) / 100,
            Fat: (90 * c) / 100,
            percentage: "10%"
        },
        {
            weight: "Weight Loss",
            calorie: WL,
            Protein:(80 * protien) / 100,
            Fat: (80 * c) / 100,
            percentage: "20%"
        },
        {
            weight: "Extreme Weight Loss",
            calorie: extremeWL,
            Protein: (70 * protien) / 100,
            Fat: (70 * c) / 100,
            percentage: "40%"
        }
    ];
    const handleChange = (e, val) => {
        console.warn(val);
        setVal(val);
    };
    const result = [{
        meal: "Breakfast",
        calorie: breakfast,
        Fat: breakfast,
        Protien: breakfast
    },
    {
        meal: "Lunch",
        calorie: lunch,
        Fat: breakfast,
        Protien: breakfast
    },
    {
        meal: "Dinner",
        calorie: dinner,
        Fat: breakfast,
        Protien: breakfast
    },
    {
        meal: "Total",
        calorie: breakfast + lunch + dinner 
    },
    ]
    const BreakFast = [{
        Name: "Egg/1",
        Logo: Egg,
        calorie: 90,
        Fat: 7,
        Protein: 6
    },
    {
        Name: "Milk/250ML",
        Logo: Milk,
        calorie: 123,
        Fat: 7,
        Protein: 8
    }
        ,
    {
        Name: "Bread/Slice",
        Logo: Bread,
        calorie: 70,
        Fat: 1,
        Protein: 3
    }, 
    {
        Name: "Paratha/100g flour",
        Logo: Paratha,
        calorie: 320,
        Fat: 12,
        Protein: 9
    },
    {
        Name: "Omelette/1",
        Logo: Omelette,
        calorie: 150,
        Fat: 12,
        Protein: 11
    }
    ,
    {
        Name: "Tea/150ML",
        Logo: Tea,    
        calorie: 2,
        Fat: 0,
        Protein: 0
    }
    ,
    {
        Name: "Channe/200g",
        Logo: Channe,
        calorie: 270,
        Fat: 4,
        Protein: 14    
    }
    ,
    {
        Name: "Yogurt/200g",
        Logo: Yogurt,
        calorie: 128,
        Fat: 2,
        Protein: 11
    }
    ,  
    {
        Name: "Chesse/Slice",
        Logo: Chesse,
        calorie: 113,
        Fat: 9,
        Protein: 7
    }
    ,
    {
        Name: "Scrambled Egg/1",
        Logo: Scrambledegg,
        calorie: 91,
        Fat: 7,
        Protein: 6
    }
    ,
    {
        Name: "French Toast/1 Slice",
        Logo: French,
        calorie: 147,
        Fat: 5,
        Protein: 5
    }
    , 
    {
        Name: "Pancake/100g",
        Logo: cake,
        calorie: 227,
        Fat: 9,
        Protein: 5
    }
    ,
    {
        Name: "Orange Juice/250ML",
        Logo: Orange,
        calorie: 117,
        Fat: 0,
        Protein: 2
    }
    ,
    {
        Name: "Banana Shake/250ML",
        Logo: Bananashake,
        calorie: 170,
        Fat: 1,
        Protein: 4
    }
    ,
    {
        Name: "StrawBerry Shake/250ML",
        Logo: Strawbshake,
        calorie: 163,
        Fat: 2,
        Protein: 4
    }
    ,
    {
        Name: "Hash Brown/1",
        Logo: Hashbrown,
        calorie: 150,
        Fat: 9,
        Protein: 2
    }
    ,
    {
        Name: "Apple Juice/250ML",
        Logo: Applejuice,
        calorie: 117,
        Fat: 0,
        Protein: 0
    }
    ,
    {
        Name: "Puri/1",
        Logo: Puri,
        calorie: 101,
        Fat: 4,
        Protein: 2
    }
    ];
    const Dinner = [{
        Name: "Grilled Chicken/150g",
        Logo: Gchicken,
        calorie: 231, 
        Fat: '5',
        Protein: '43'
    }
    ,
    {
        Name: "Baked Chicken",
        Logo: bakedC,
        calorie: 316,
        Fat: 9,
        Protein: 59
    }
    ,
    {
        Name: "Beef burgers",
        Logo: Burgers,
        calorie: 520, 
        Fat: 29,
        Protein: 32
    }
    ,
    {
        Name: "Roti/1",
        Logo: Paratha,
        calorie: 120,
        Fat: 29,
        Protein: 32
    }
    ,
    {
        Name: "Fried Rice/120g",
        Logo: Frice,
        calorie: 230,
        Fat: 8,
        Protein: 6
    }
    ,
    {
        Name: "Chicken Soup/200g",
        Logo: Soup,
        calorie: 84,
        Fat: 2,
        Protein: 14
    }
    ,
    {
        Name: "Chicken Briyani/150 g",
        Logo: Cbriyani,
        calorie: 300,
        Fat: 10,
        Protein: 14
    }
    ,
    {
        Name: "Beef Steak/300g",
        Logo: Beefsteak,
        calorie: 630,
        Fat: 39,
        Protein: 60
    }
    ,
    {
        Name: "Bean Salad/220g",
        Logo: Beansalad,
        calorie: 196,
        Fat: 9,
        Protein: 10
    }
    ,
    {
        Name: "Chicken Kebab/100g",
        Logo: Ckebab,
        calorie: 145,
        Fat: 5,
        Protein: 19
    }
    ,
    {
        Name: "Chicken Curry/150g",
        Logo: Ccurry,
        calorie: 342,
        Fat: 21,
        Protein: 26
    }
    ,
    {
        Name: "Paneer Curry/150g",
        Logo: Pcurry,
        calorie: 308 ,
        Fat: 23,
        Protein: 11
    }
    ,
    {
        Name: "Baked Fish/400g",
        Logo: Fish,
        calorie: 336,
        Fat: 9,
        Protein: 58
    }
    ,
    {
        Name: "Chicken Pizza Slice/9 inch",
        Logo: Pizza,
        calorie: 195,
        Fat: 7,
        Protein: 9
    }
    ,
    {
        Name: "Brownie/40g",
        Logo: Brownie,
        calorie: 185,
        Fat: 9,
        Protein: 2
    }
    ,
    {
        Name: "Chicken Speghetti/100g",
        Logo: Cnoodles,
        calorie: 141,
        Fat: 2,
        Protein: 10

    }
    ,
    {
        Name: "Fresh Lime/400ML",
        Logo: Lime,
        calorie: 90,
        Fat: 0.3,
        Protein: 0.9
    }
    ,  
    {
        Name: "Meat Balls/200g",
        Logo: Meatballs,
        
        calorie: 414,
        Fat: 24,
        Protein: 28
    }
    ];
    const Lunch = [{
        Name: "Grilled Chicken/150g",
        Logo: Gchicken,
        calorie: 231, 
        Fat: '5',
        Protein: '43'
    }
    ,
    {
        Name: "Baked Chicken",
        Logo: bakedC,
        calorie: 316,
        Fat: 9,
        Protein: 59
    }
    ,
    {
        Name: "Beef burgers",
        Logo: Burgers,
        calorie: 520, 
        Fat: 29,
        Protein: 32
    }
    ,
    {
        Name: "Roti/1",
        Logo: Paratha,
        calorie: 120,
        Fat: 29,
        Protein: 32
    }
    ,
    {
        Name: "Fried Rice/120g",
        Logo: Frice,
        calorie: 230,
        Fat: 8,
        Protein: 6
    }
    ,
    {
        Name: "Chicken Soup/200g",
        Logo: Soup,
        calorie: 84,
        Fat: 2,
        Protein: 14
    }
    ,
    {
        Name: "Chicken Briyani/150 g",
        Logo: Cbriyani,
        calorie: 300,
        Fat: 10,
        Protein: 14
    }
    ,
    {
        Name: "Beef Steak/300g",
        Logo: Beefsteak,
        calorie: 630,
        Fat: 39,
        Protein: 60
    }
    ,
    {
        Name: "Bean Salad/220g",
        Logo: Beansalad,
        calorie: 196,
        Fat: 9,
        Protein: 10
    }
    ,
    {
        Name: "Avacado Salad/200g",
        Logo: Avacado,
        calorie: 322,
        Fat: 27,
        Protein: 4
    }
    ,
    {
        Name: "Russian Salad/200g",
        Logo: Russian,
        calorie: 298,
        Fat: 19,
        Protein: 3
    }
    ,
    {
        Name: "Prawns/300g",
        Logo: Prawns,
        calorie: 177,
        Fat: 2,
        Protein: 37

    }
    ,
    {
        Name: "Ceaser Salad/200g",
        Logo: Csalad,
        calorie: 284,
        Fat: 23,
        Protein: 14
    }
    ,
    {
        Name: "Potato Veges/150g",
        Logo: Veges,
        calorie: 285,
        Fat: 14,
        Protein:3
    }
    ,
    {
        Name: "Sandwich/1",
        Logo: Sandwich,
        calorie: 450,
        Fat: 22,
        Protein: 23
    }
    ,
    {
        Name: "Chicken Kebab/100g",
        Logo: Ckebab,
        calorie: 145,
        Fat: 5,
        Protein: 19
    }
    ,
    {
        Name: "Chicken Curry/150g",
        Logo: Ccurry,
        calorie: 342,
        Fat: 21,
        Protein: 26
    }
    ,
    {
        Name: "Paneer Curry/150g",
        Logo: Pcurry,
        calorie: 308 ,
        Fat: 23,
        Protein: 11
    }
    ,
    {
        Name: "Baked Fish/400g",
        Logo: Fish,
        calorie: 336,
        Fat: 9,
        Protein: 58
    }
    ,
    {
        Name: "Chicken Pizza Slice/9 inch",
        Logo: Pizza,
        calorie: 195,
        Fat: 7,
        Protein: 9
    }
    ,
    {
        Name: "Chicken Speghetti/100g",
        Logo: Cnoodles,
        calorie: 135,
        Fat: 1,
        Protein: 6

    }
    ,
    {
        Name: "Hash Brown/1",
        Logo: Hashbrown,
        calorie: 150,
        Fat: 9,
        Protein: 2
    }
    ,
    {
        Name: "Fresh Lime/400ML",
        Logo: Lime,
        calorie: 90,
        Fat: 0.3,
        Protein: 0.9
    }
    ,
    {
        Name: "Apple Juice/Per glass",
        Logo: Applejuice,
        calorie: 113,
        Fat: 0.5,
        Protein: 0.5
    }
    ];
    return (
        <>
            <Container maxWidth="md" sx={{ textAlign: "start" }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead sx={{ background: "#1769aa" }}>
                            <TableRow>
                                <TableCell><Typography color="white" variant="h6"><b>Weight loss</b></Typography></TableCell>
                                <TableCell><Typography color="white" variant="h6"><b>Calories/day</b></Typography></TableCell>
                                <TableCell><Typography color="white" variant="h6"><b>Proteins/day</b></Typography></TableCell>
                                <TableCell><Typography color="white" variant="h6"><b>Fats/day</b></Typography></TableCell>
                                <TableCell><Typography color="white" variant="h6"><b>%</b></Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {data.map((d) => {
                                return (
                                    <>
                                        <TableRow>
                                            <TableCell><Typography>{d.weight}</Typography></TableCell>
                                            <TableCell><Typography>{d.calorie}</Typography></TableCell>
                                            <TableCell><Typography>{d.Protein}g</Typography></TableCell>
                                            <TableCell><Typography>{d.Fat}g</Typography></TableCell>
                                            <TableCell><Typography>{d.percentage}</Typography></TableCell>
                                        </TableRow>
                                    </>
                                )
                            })}

                        </TableBody>
                    </Table>
                </TableContainer><br />
                {!dietPlanShow?
                <Button variant="contained" sx={{ background: "green" }} onClick={() => setDietPlanShow(true)}>Make Your Diet Plan</Button>:null}
                <br />
                <br />
                
            </Container>
            <Container maxWidth="sm">{dietPlanShow ?
                    <Tabs sx={{ mx: "auto", my: "20px" }} value={val} onChange={handleChange}>
                        <Tab sx={{ color: "#000000" }} label="BreakFast" />
                        <Tab sx={{ color: "#000000" }} label="Lunch" />
                        <Tab sx={{ color: "#000000" }} label="Dinner" />
                        <Tab sx={{ color: "#000000" }} label="Result" />
                    </Tabs> : null
                }</Container>
            {dietPlanShow ? <>
                <TabPanel value={val} index={0}>
                    <Container maxWidth="lg">
                        <br />
                        <Typography variant='h4'><u>BreakFast Calories</u>: {breakfast}</Typography>
                        <Stack direction="row" sx={{ display: "flex", mt: "10px", flexWrap: "wrap", justifyContent: "space-between" }}>
                            {
                                BreakFast.map((service) => {
                                    return (
                                        <Card sx={{ width: 300, mt: "40px", background: "#fff", borderRadius: "10px",boxShadow:14, cursor: "pointer" }}>
                                            <CardMedia
                                                sx={{ height: 140, width: 340 }}
                                                image={service.Logo}
                                                title="green iguana"
                                            /> 
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    <b> {service.Name}</b>
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="div" color="green">
                                                    <b> {service.calorie}</b>cals
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="div" color="green">
                                                    <b> {service.Protein}</b>g protein
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="div" color="green">
                                                    <b> {service.Fat}</b>g fats
                                                </Typography>
                                                <Button size="small" onClick={() => setBreakfast(breakfast + service.calorie + service.Protein + service.Fat)} variant="contained">Add to Cart</Button>
                                            </CardContent>
                                        </Card>
                                    )
                                })
                            }
                        </Stack>
                    </Container>
                </TabPanel>
                <TabPanel value={val} index={1}>
                <Container maxWidth="lg">
                        <br />
                        <Typography variant='h4'><u>Lunch Calories</u>: {lunch}</Typography>
                        <Stack direction="row" sx={{ display: "flex", mt: "10px", flexWrap: "wrap", justifyContent: "space-between" }}>
                            {
                                Lunch.map((service) => {
                                    return (
                                        <Card sx={{ width: 300, mt: "40px", background: "#fff", borderRadius: "10px",boxShadow:14, cursor: "pointer" }}>
                                            <CardMedia
                                                sx={{ height: 140, width: 340 }}
                                                image={service.Logo}
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    <b> {service.Name}</b>
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="div" color="green">
                                                    <b> {service.calorie}</b>cals
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="div" color="green">
                                                    <b> {service.Protein}</b>g protein
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="div" color="green">
                                                    <b> {service.Fat}</b>g fats
                                                </Typography>
                                                <Button size="small" onClick={() => setLunch(lunch + service.calorie + service.Protein + service.Fat)} variant="contained">Add to Cart</Button>
                                            </CardContent>
                                        </Card>
                                    )
                                })
                            }
                        </Stack>
                    </Container>
                </TabPanel>
                <TabPanel value={val} index={2}>
                <Container maxWidth="lg">
                        <br />
                        <Typography variant='h4'><u>Dinner Calories</u>: {dinner}</Typography>
                        <Stack direction="row" sx={{ display: "flex", mt: "10px", flexWrap: "wrap", justifyContent: "space-between" }}>
                            {
                                Dinner.map((service) => {
                                    return (
                                        <Card sx={{ width: 300, mt: "20px", background: "#fff", borderRadius: "10px", cursor: "pointer" }}>
                                            <CardMedia
                                                sx={{ height: 140, width: 340 }}
                                                image={service.Logo}
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    <b> {service.Name}</b>
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="div" color="green">
                                                    <b> {service.calorie}</b>cals
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="div" color="green">
                                                    <b> {service.Protein}</b>cals
                                                </Typography>
                                                <Typography gutterBottom variant="h6" component="div" color="green">
                                                    <b> {service.Fat}</b>cals
                                                </Typography>
                                                

                                                <Button size="small" onClick={() => setDinner(dinner + service.calorie + service.Protein + service.Fat)} variant="contained">Add to Cart</Button>
                                            </CardContent>
                                        </Card>
                                    )
                                })
                            }
                        </Stack>
                    </Container>
                </TabPanel>
                
                <TabPanel value={val} index={3}>
                    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead sx={{ background: "#1769aa" }}>
                                    <TableRow>
                                        <TableCell><Typography color="white" variant="h6"><b>Meal</b></Typography></TableCell>
                                        <TableCell><Typography color="white" variant="h6"><b>Calories</b></Typography></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {result.map((d) => {
                                        return (
                                            <>
                                                <TableRow>
                                                    <TableCell><Typography>{d.meal}</Typography></TableCell>
                                                    <TableCell><Typography>{d.calorie}</Typography></TableCell>
                                                </TableRow>
                                            </>
                                        )
                                    })}

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                </TabPanel></>
                : null}
            <Footer />
        </>
    )
}
function TabPanel(props) {
    return <div>{props.value === props.index && props.children}</div>;
}
export default DietPlanner