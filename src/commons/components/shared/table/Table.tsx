import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { dataRowFormat } from "../../../interfaces/DataRowFormat";
import "./Table.css";

export default function BasicTable(props: { rows: dataRowFormat[] }) {
  let rows: dataRowFormat[] = props.rows;

  return (
    <div>
      <h1 className="title">Material UI - Responsive Table</h1>
      <Paper className="container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell>Calories</TableCell>
              <TableCell>Fat (g)</TableCell>
              <TableCell>Carbs (g)</TableCell>
              <TableCell>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ name, calories, fat, carbs, protein }) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell>{calories}</TableCell>
                <TableCell>{fat}</TableCell>
                <TableCell>{carbs}</TableCell>
                <TableCell>{protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
