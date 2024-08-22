import React from "react";
import { AccountVmMovements } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";
import { MovementListItemComponent } from "./movement-list-item.component";


interface Props {
    movementList: AccountVmMovements[];
}
export const MovementListTableComponent: React.FC<Props> = (props) => {
    const { movementList } = props;
    
    return (
    <>
    <div className={classes.gridContainer}>
        <div className={classes.headerTable}>

            <span className={classes.headerCell}>FECHA</span>
            <span className={classes.headerCell}>FECHA VALOR</span>
            <span className={classes.headerCell}>DESCRIPCION</span>
            <span className={classes.headerCell}>IMPORTE</span>
            <span className={classes.headerCell}>SALDO DISPONIBLE</span>
        </div>
        {movementList.length > 0 ? (
        movementList.map((movement) => (
            <MovementListItemComponent key={movement.id} movementItem={movement} />
        ))
        ) : (
        <p>No hay movimientos disponibles.</p>
        )}
    </div>
    </>
    );
};