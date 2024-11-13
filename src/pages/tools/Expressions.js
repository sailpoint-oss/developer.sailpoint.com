import React from 'react';
import styles from './json-path.module.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';

function JsonExpressions() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(jsonpath, description) {
    return { jsonpath, description };
  }

  const rows = [
    createData('$', 'the root object/element'),
    createData('@', 'the current object/element'),
    createData('. or []', 'child operator'),
    createData('..', 'recursive descent. JSONPath borrows this syntax from E4X.'),
    createData('*', 'wildcard. All objects/elements regardless their names.'),
    createData('[]', 'subscript operator. XPath uses it to iterate over element collections and for predicates. In Javascript and JSON it is the native array operator.'),
    createData('[,]', 'Union operator in XPath results in a combination of node sets. JSONPath allows alternate names or array indices as a set.'),
    createData('[start:end:step]', 'array slice operator borrowed from ES4.'),
    createData('?()', 'applies a filter (script) expression.'),
    createData('()', 'script expression, using the underlying script engine.'),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>JSONPath</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>

              <StyledTableCell align="right">{row.jsonpath}</StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <a href="https://goessner.net/articles/JsonPath/index.html#e2">
              See: JSONPath expressions - https://goessner.net/
            </a>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default JsonExpressions;