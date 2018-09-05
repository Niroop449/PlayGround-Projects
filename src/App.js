import React from 'react';
import ReactDOM from 'react-dom'
import * as bootstrap from 'react-bootstrap';

const dummySentences = [
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  'Donec hendrerit tempor tellus.',
  'Donec pretium posuere tellus.',
  'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
  'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  'Nulla posuere.',
  'Donec vitae dolor.',
  'Nullam tristique diam non turpis.',
  'Cras placerat accumsan nulla.',
  'Nullam rutrum.',
  'Nam vestibulum accumsan nisl.'
];

export default class App extends React.Component{
render(){

return(
  <bootstrap.Grid>
    <bootstrap.Row className="show-grid">
      <bootstrap.Col sm={6} md={3} lg={1}>
        <code>
          &lt;
          {'Col sm={6} md={3}'} /">">">">">">">&gt;
        </code>
        <br />
        {dummySentences.slice(0, 6).join(' ')}
      </bootstrap.Col>
      <bootstrap.Col sm={6} md={3} lg={1}>
        <code>
          &lt;
          {'Col sm={6} md={3}'} /">">">">">">">&gt;
        </code>
        <br />
        {dummySentences.slice(0, 4).join(' ')}
      </bootstrap.Col>
      <bootstrap.Clearfix visibleSmBlock>
        <code>
          &lt;
          {'Clearfix visibleSmBlock'} /">">">">">">">&gt;
        </code>
      </bootstrap.Clearfix>
      <bootstrap.Col sm={6} md={3} lg={1}>
        <code>
          &lt;
          {'Col sm={6} md={3}'} /">">">">">">">&gt;
        </code>
        <br />
        {dummySentences.slice(0, 6).join(' ')}
      </bootstrap.Col>
      <bootstrap.Col sm={6} md={3} lg={1}>
        <code>
          &lt;
          {'Col sm={6} md={3}'} /">">">">">">">&gt;
        </code>
        <br />
        {dummySentences.slice(0, 2).join(' ')}
      </bootstrap.Col>
    </bootstrap.Row>
  </bootstrap.Grid>
);
}
}