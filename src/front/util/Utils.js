import countriesData from "Data/countries.json";

export const mapOrder = (array, order, key) => {
  array.sort(function (a, b) {
    var A = a[key], B = b[key];
    if (order.indexOf(A + "") > order.indexOf(B + "")) {
      return 1;
    } else {
      return -1;
    }
  });
  return array;
};


export const getDateWithFormat = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return dd + '.' + mm + '.' + yyyy;
}

export const getCurrentTime = () => {
  const now = new Date();
  return now.getHours() + ":" + now.getMinutes()
}

export const addCommas = (nStr) => {
  nStr += "";
  var x = nStr.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
}


export function hideColumn(tab, value) {
  for (var i = 0; i < tab.length; i++) {
    if (tab[i].accessor === value) {
      tab[i].show = false;
    } else {
      tab[i].show = true;
    }
  }
};

export function prepareCoutries() {
  var i = 0;
  var tab = [];
  for (i = 0; i < countriesData.length; i++) {
    tab[i] = { label: countriesData[i].name, value: countriesData[i].name, key: i };
  }
  return tab;
}

export function prepareSelectFromTab(tab) {
  var i = 0;
  var select_tab = [];
  if (tab !== undefined) {
    for (i = 0; i < tab.length; i++) {
      if (typeof (tab[i]) == "object")
        select_tab[i] = { label: tab[i].name, value: tab[i], key: i };
      else
        select_tab[i] = { label: tab[i], value: tab[i], key: i };
    }
  }
  return select_tab;
}


export function setDefault4Tab(tab, defaultValue) {
  for (var i = 0; i < tab.length; i++) {
    if (tab[i] === defaultValue) {
      if (typeof (tab[i] == "object")) {
        return { label: tab[i].name, value: tab[i], key: i };
      }
      else {
        return { label: tab[i], value: tab[i], key: i };
      }
    }
  }
  return "";
};


export function findMatching(val, tab) {
  var selected = {};
  for (var i = 0; i < tab.length; i++) {
    if (tab[i].value === val) {
      selected = tab[i];
    }
  }
  console.log("findMaching  : ", selected.length);
  return selected;
};

export function findMatchingSet(val, tab) {
  var selected = [];
  for (var i = 0; i < tab.length; i++) {
    if (tab[i].value === val) {
      selected.push(tab[i]);
    }
  }
  console.log("findMachingSet nb  : ", selected.length);
  return selected;
};


export function collect(props) {
  return { data: props.data };
}

export function page4Type(str) {
  var res = str.split("/");
  var last = res.length - 1;
  return res[last];
}

import React from "react";
import { Button, Row, Link, NavLink, NavItem, Nav } from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";
import IntlMessages from "Util/IntlMessages";

export function NewButton(props) {
  if (!props.isType) {
    return "";
  }
  return (
    <Button
      color="primary"
      size="lg"
      className="top-right-button"
      onClick={props.func}
    >
      <IntlMessages id="pages.add-new" />
    </Button>
  );
}

export function GiveHeader(props) {
  if (props.isType) {
    return (<h1><IntlMessages id={props.type} /></h1>);
  } else if (page4Type(props.path) === props.fit) {
    return (
      <h1><IntlMessages id={props.item} /></h1>
    );
  } else {
    return (
      <h1><IntlMessages id={props.item4Type} />    {page4Type(props.path)}</h1>
    );
  }
}

export function giveIntlText(myId) {
  return (<IntlMessages id={myId} />)
}

export function getCompanyPrefix(str, n) {
  return str.substr(0, n);
}

export function ParentBody(props) {
  if (!props.item) {
    return "";
  }
  if (!props.func && !props.href) {
    return "";
  }
  return (
    <Row>
      <Colxx md="6" sm="6">
        <p className="fat">
          <IntlMessages id={props.title} />
        </p>
      </Colxx>
      <Colxx md="6" sm="6">
        <Nav className="flex-column">
          <NavItem>
            {(!props.func) ?
              <NavLink
                href={props.href + props.item.id}
                key={"parentId1" + props.item.id}>#{props.item.name}</NavLink>
              :
              <NavLink
                href="#"
                key={"parentId0" + props.item.id}
                onClick={props.func(props.item.id)}>#{props.item.name}</NavLink>
            }
          </NavItem>
        </Nav>
      </Colxx>
    </Row>
  );
}

export function ChildNb(props) {
  if (!props.items) {
    return "";
  }
  return (
    <Row>
      <Colxx md="6" sm="6">
        <p className="fat">
          <IntlMessages id={props.title} />
        </p>
      </Colxx>
      <Colxx md="6" sm="6">
        {props.items.length}
      </Colxx>
    </Row>
  )
}

export function ChildBody(props) {
  if (!props.items) {
    return "";
  }
  if (!props.func && !props.href) {
    return "";
  }
  return (
    <Row>
      <Colxx md="6" sm="6">
        <p className="fat">
          <IntlMessages id={props.title} />
        </p>
      </Colxx>
      <Colxx md="6" sm="6">
        <Nav className="flex-column">
          {props.items.map(items => (
            (!props.func) ?
              <NavItem key={props.mykey + "ni1" + items.id}><NavLink
                id="utils"
                href={props.href + items.id}
                key={props.mykey + "1" + items.id}>#{(!items.name) ? items.sgtin : items.name}</NavLink></NavItem>
              :
              <NavItem key={props.mykey + "ni0" + items.id}>><NavLink
                href="#"
                key={props.mykey + "0" + items.id}
                onClick={props.func(items.id)}>#{(!items.name) ? items.sgtin : items.name}</NavLink></NavItem>

          ))}
        </Nav>
      </Colxx>
    </Row>
  );
}

/*
export function ParentBody(props) {
  if (!props.item) {
    return "";
  }
  if (!props.func && !props.href){
    return "";
  }
  return (
    <Row>
      <Colxx md="6" sm="6">
        <p className="fat">
          <IntlMessages id="event.parentId" />
        </p>
      </Colxx>
      <Colxx md="6" sm="6">
        {(!props.func) ?
          <NavLink
            href={props.href + props.item.id}
            key={"parentId1"+props.item.id}>#{props.item.name}</NavLink>
          :
          <NavLink
            href="#" 
            key={"parentId0"+props.item.id}
            onClick={props.func(props.item.id)}>#{props.item.name}</NavLink>
        }
      </Colxx>
    </Row>
  );
}

export function ChildNb(props) {
  if (!props.items) {
    return "";
  }
  return (
      <Row>
        <Colxx md="6" sm="6">
          <p className="fat">
            <IntlMessages id="event.children" />
          </p>
        </Colxx>
        <Colxx md="6" sm="6">
          {props.items.length}
        </Colxx>
      </Row>
  )
}

export function ChildBody(props) {
  if (!props.items) {
    return "";
  }
  if (!props.func && !props.href){
    return "";
  }
  return (  
      <Row>
        <Colxx md="6" sm="6">
          <p className="fat">
            <IntlMessages id="event.childrenId" />
          </p>
        </Colxx>
        <Colxx md="6" sm="6">
          {props.items.map(items => (

            (!props.func) ?
              <NavLink
                href={props.href + items.id}
                key={"childEpcs1" + items.id}>#{items.name}</NavLink>
              :
              <NavLink
                href="#"
                key={"childEpcs0" + items.id}
                onClick={props.func(items.id)}>#{items.name}</NavLink>

          ))}
        </Colxx>
      </Row>
  );
}*/


export function SimpleEventBody(props) {
  if (!props.tagId) {
    return "";
  }
  return (
    <Row>
      <Colxx md="6" sm="6">
        <p className="fat">
          <IntlMessages id="event.tagId" />
        </p>
      </Colxx>
      <Colxx md="6" sm="6">
        {props.tagId}
      </Colxx>
    </Row>
  );
}

export function MainEventBody(props) {
  if (!props.item) {
    return "";
  }

  return (
    <div>
      <Row>
        <Colxx md="6" sm="6">
          <p className="fat">
            <IntlMessages id="event.action" />
          </p>
        </Colxx>
        <Colxx md="6" sm="6">
          {props.item.action}
        </Colxx>
      </Row>
      <Row>
        <Colxx md="6" sm="6">
          <p className="fat">
            <IntlMessages id="event.businessStep" />
          </p>
        </Colxx>
        <Colxx md="6" sm="6">
          {props.item.bizStep}
        </Colxx>
      </Row>
      <Row>
        <Colxx md="6" sm="6">
          <p className="fat">
            <IntlMessages id="event.disposition" />
          </p>
        </Colxx>
        <Colxx md="6" sm="6">
          {props.item.disposition}
        </Colxx>
      </Row>
      {(!props.item.bizLocation) ? "" :
        <Row>
          <Colxx md="6" sm="6">
            <p className="fat">
              <IntlMessages id="event.businessLocation" />
            </p>
          </Colxx>
          <Colxx md="6" sm="6">
            {props.item.bizLocation.name}
          </Colxx>
        </Row>
      }
      {(!props.item.readPoint) ? "" :
        <Row>
          <Colxx md="6" sm="6">
            <p className="fat">
              <IntlMessages id="event.readPoint" />
            </p>
          </Colxx>
          <Colxx md="6" sm="6">
            {props.item.readPoint.name}
          </Colxx>
        </Row>
      }
    </div>
  );
}