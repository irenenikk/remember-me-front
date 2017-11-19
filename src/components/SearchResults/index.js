import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickAction, inputBookWriterChangedAction, inputBookTitleChangedAction } from '../../state/actions';

import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';


const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};


class SearchResults extends Component {

  render() {
    return (
      <center>
      <p></p>
        <Paper style={{ width: '95%', display: 'inline-block', margin: '20', padding: '20'}} zDepth={2} >


          <Card>

             <CardTitle title="Rikinkeltainen taivas" subtitle="Kjell Westö" />
             <CardText>
                Ystävyys, intohimo, aikuiseksi kasvaminen – mestarillinen kolmen sukupolven kuvaus vie 1960-luvulta tähän päivään.

                Alex ja Stella Rabellilta ei puutu mitään. Ainakin siltä kertojasta tuntuu kesällä 1969, jolloin hän saa kutsun sisarusten kesäparatiisiin. Hänestä tulee Alexin läheinen ystävä mutta Stellaan hän rakastuu.
                Poikavuosina solmittu ystävyys kantaa halki seksuaalisen heräämisen ja nuoruuden myrskyjen aina kultaisiin menestyksen vuosiin ja niiden kääntöpuolelle.

                Jälkeenpäin nuo viattomat onnen ajat saavat mustat kehykset. Kuva Rabellin täydellisestä perheestä rakoilee, kun kertoja joutuu vedetyksi heidän tummiin kuvioihinsa ja alkaa tuntea yhä suurempaa vierautta. Kuka petti kenet?
            </CardText>

             <CardActions style={styles.wrapper}>
               <Chip
                  onRequestDelete={handleRequestDelete}
                  onClick={handleTouchTap}
                  style={styles.chip}
                >
                  Klassikko
                </Chip>
                <Chip
                    onRequestDelete={handleRequestDelete}
                    onClick={handleTouchTap}
                    style={styles.chip}
                  >
                    Romaani
                  </Chip>
                  <Chip
                    onRequestDelete={handleRequestDelete}
                    onClick={handleTouchTap}
                    style={styles.chip}
                  >
                    Suomalainen
                  </Chip>
             </CardActions>
           </Card>

        </Paper>
      </center>
    );
  }
}


function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleTouchTap() {
  alert('You clicked the Chip.');
}



function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
