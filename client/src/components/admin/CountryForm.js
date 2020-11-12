import React, {useState, useEffect} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {Button, Form, FormGroup, Label, Input} from "reactstrap"
import {connect} from "react-redux"
import * as actions from "../../actions"
import {Box, Typography} from "@material-ui/core"
import { green, grey, pink, blue, orange, teal, indigo } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
// import { Alert } from '@material-ui/lab';

const useStyles = makeStyles({
    success: {
        backgroundColor: green[500],
        color: "#FFFFFF",
        margin: "auto",
        alignContent: "center",
        justifyContent: "center",
        display: "block",
        borderRadius: 10,
        padding: 10,
        lineHeight: "100%"
    },
    
    successText: {
        fontSize: "30px"
    },

    successIcon: {
        fontSize: "40px",
        color: "#FFFFFF",
        marginRight: 20
    }
})

const CountryForm = ({addCountry, editCountry, disp, index, mode, data}) => {

    const classes = useStyles();

    useEffect(() => {
       if(mode === "edit"){
            editableData()
       }
    }, [])

    const [show, setShow] = useState(true)
    
    
    const [name, setName] = useState("")
    const [code, setCode] = useState("")
    const [population, setPopulation] = useState("")
    const [mdRatified, setMdRatified] = useState(true)
    const [mdYear, setMdYear] = useState("")
    const [free_speech, setFreeSpeech] = useState(true)
    const [fsRestrict, setFsRestrict] = useState("")
    const [fmPresent, setFmPresent] = useState(true)
    const [fmRestrict, setFmRestrict] = useState("")
    const [fmYear, setFmYear] = useState("")
    const [rwbRank, setRwbRank] = useState(0)
    const [rwbScore, setRwbScore] = useState(0)
    const [fake_news, setFakeNews] = useState(true)
    const [fakeNewsDescription, setFnDescription] = useState("")
    const [fakeNewsYear, setFnYear] = useState(0)
    const [fakeNewsProsecution, setFnProsecution] = useState(true)
    const [internetAccess, setInternetAccess] = useState(0)
    const [censorshipLevel, setCensorshipLevel] = useState(0)
    const [civilDiscourseRating, setCivilDiscourseRating] = useState(0)
    const [sources, setSources] = useState("")
    const [id, setId] = useState(null)


    const editableData = () => {
        data.map(data => {
            setId(data._id)
            setName(data.name)
            setCode(data.code)
            setPopulation(data.population)
            data.millenium_dec.map(info => {
                setMdRatified(info.ratified)
                setMdYear(info.year)
            })
            data.freedom_speech.map(info => {
                setFreeSpeech(info.present)
                setFsRestrict(info.restrictions)
            })
            data.freedom_media.map(info => {
                setFmPresent(info.present)
                setFmRestrict(info.restrictions)
                setFmYear(info.year)
            })
            setRwbRank(data.rwb_ranking)
            setRwbScore(data.rwb_score)
            data.fake_news.map(info => {
                setFakeNews(info.present)
                setFnDescription(info.description)
                setFnYear(info.year)
                setFnProsecution(info.prosecution)
            })
            setInternetAccess(data.internet_Access)
            setCensorshipLevel(data.censorship_level)
            setCivilDiscourseRating(data.cd_rating)
            setSources(data.sources)
        })
    }

   

    const onSubmit = (e) => {
        e.preventDefault()
        const countryData = {
            name: name,
            code: code,
            population: population,
            millenium_dec: [{
                ratified: mdRatified,
                year: mdYear
            }],
            freedom_speech: [{
                present: free_speech,
                restrictions: fsRestrict
            }],
            freedom_media: [{
                present: fmPresent,
                restrictions: fmRestrict,
                year: fmYear
            }],
            rwb_ranking: rwbRank,
            rwb_score: rwbScore,
            fake_news: [{
                present: fake_news,
                description: fakeNewsDescription,
                year: fakeNewsYear,
                prosecution: fakeNewsProsecution,
            }],
            internet_access: internetAccess,
            censorship_level: censorshipLevel,
            cd_rating: civilDiscourseRating,
            sources: [sources],
            id: id
        }

       
        if(mode === "add"){
            addCountry(countryData)
        }
        else {
            editCountry(id, countryData)
        }
        setShow(false)
        
    }

        
        

    function form(){
        return (
        <Form onSubmit={onSubmit}>

        <FormGroup>
            <Label for="name">Country</Label>
            <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)} 
            />
            <br />
            <Input
                type="text"
                name="code"
                id="code"
                placeholder="Country Code"
                value={code}
                onChange={e => setCode(e.target.value)} 
            />
            <br />
            <Input
                type="number"
                name="population"
                id="population"
                placeholder="Population"
                value={population}
                onChange={e => setPopulation(e.target.value)} 
            />
        </FormGroup> 

        <FormGroup>
            <Label for="md_rat">Millenium Declaration</Label>
            <Input type="select" name="md_rat" id="md_rat" value={mdRatified} onChange={e => setMdRatified(e.target.value)}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
            </Input>
                <br />
            <Input
                type="number"
                name="md_year"
                id="md_year"
                placeholder="Year"
                value={mdYear}
                onChange={e => setMdYear(e.target.value)} 
            />
        </FormGroup> 

        <FormGroup>
            <Label for="free_speech">Freedom of Speech</Label>
            <Input type="select" name="free_speech" id="free_speech" value={free_speech} onChange={e => setFreeSpeech(e.target.value)}>
            <option value={true} >Yes</option>
            <option value={false}>No</option>
            </Input>
                <br />
            <Input
                type="text"
                name="fs_restrictions"
                id="fs_restrictions"
                placeholder="Restrictions"
                value={fsRestrict}
                onChange={e => setFsRestrict(e.target.value)} 
            />

        </FormGroup>

        <FormGroup>
            <Label for="free_media">Freedom of Media</Label>
            <Input type="select" name="free_media" id="free_media" value={fmPresent} onChange={e => setFmPresent(e.target.value)}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
            </Input>
            <br />
            <Input
                type="text"
                name="fm_restrictions"
                id="fm_restrictions"
                placeholder="Restrictions"
                value={fmRestrict}
                onChange={e => setFmRestrict(e.target.value)} 
            />
            <br />
            <Input
                type="number"
                name="fm_year"
                id="fm_year"
                placeholder="Year"
                value={fmYear}
                onChange={e => setFmYear(e.target.value)} 
            />
        </FormGroup>

        <FormGroup>
            <Label for="rwb_rank">Reporters Without Borders</Label>
            <Input
                type="number"
                name="rwb_rank"
                id="rwb_rank"
                placeholder="Ranking"
                value={rwbRank}
                onChange={e => setRwbRank(e.target.value)} 
            />
            <br />

            <Input
                type="number"
                min="0.00"
                step="0.001"
                max="1000.00"
                name="rwb_index"
                id="rwb_index"
                placeholder="Score"
                value={rwbScore}
                onChange={e => setRwbScore(e.target.value)} 
            />
        </FormGroup> 

        <FormGroup>
            <Label for="fake_news">Fake News Laws</Label>
            <Input type="select" name="fake_news" id="fake_news" value={fake_news} onChange={e => setFakeNews(e.target.value)}>
            <option value={true} >Yes</option>
            <option value={false}>No</option>
            </Input>
                <br />
            <Input
                type="text"
                name="fn_description"
                id="fn_description"
                placeholder="Description"
                value={fakeNewsDescription}
                onChange={e => setFnDescription(e.target.value)} 
            />
            <br />
            <Input
                type="number"
                name="fn_year"
                id="fn_year"
                placeholder="Year"
                value={fakeNewsYear}
                onChange={e => setFnYear(e.target.value)} 
            />
            <br />
            <Input type="select" name="fn_prosecution" id="fn_prosecution" value={fakeNewsProsecution} onChange={e => setFnProsecution(e.target.value)}>
            <option value={true} >Yes</option>
            <option value={false}>No</option>
            </Input>
        </FormGroup>

        <FormGroup>
            <Label for="internet_access">Internet Access Percentage</Label>
            <Input
                type="number"
                min="0.00"
                step="0.01"
                max="100.00"
                name="internet_access_per"
                id="internet_access_per"
                placeholder="Percentage"
                value={internetAccess}
                onChange={e => setInternetAccess(e.target.value)} 
            />
        </FormGroup>

        <FormGroup>
            <Label for="censorship_level">Censorship Level</Label>
            <Input
                type="number"
                min="0.0"
                step="0.1"
                max="10.0"
                name="censorship_level"
                id="censorship_level"
                placeholder="Censorship Level"
                value={censorshipLevel}
                onChange={e => setCensorshipLevel(e.target.value)} 
            />
        </FormGroup>

        <FormGroup>
            <Label for="cd_rating">Civil Discourse Rating</Label>
            <Input
                type="number"
                name="cd_rank"
                id="cd_rank"
                placeholder="Ranking"
                value={civilDiscourseRating}
                onChange={e => setCivilDiscourseRating(e.target.value)} 
            />
        </FormGroup>

        <FormGroup>
            <Label for="sources">Sources</Label>
            <Input
                type="textarea"
                name="sources"
                id="sources"
                placeholder="List links separated by commma"
                value={sources}
                onChange={e => setSources(e.target.value)} 
            />
        </FormGroup> 

            <Button
                color="success"
                style={{marginTop:"2rem"}}
                block>
            Save
            </Button>

    </Form>)
    }



    function success() {
        const showCountries = () => {
            
            setTimeout(() => {
                disp("countries")
                index(0)
            }, 1000);
        }
        return(
            <Box className={classes.success}>
                <Typography className={classes.successText} >
                  <CheckCircleOutlineIcon className={classes.successIcon} />
                  Success
                  </Typography>

                {showCountries()}
            </Box>
            
        )
    }
   

    return (
        <div>
        {show ? 
            form()
            : 
           success()
        }
        </div>
    )
}

function mapStateToProps({country}) {
    return {country}
}


export default connect(mapStateToProps, actions)(CountryForm)