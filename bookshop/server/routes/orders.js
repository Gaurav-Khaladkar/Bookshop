const db = require("../utils/dbpool")
const {apiSuccess, apiError} = require("../utils/apiresult")
const express = require("express")
const router = express.Router()

// GET /orders/curuser
router.get("/curuser", (req, resp) => {
    resp.send("Homework: Orders of current user")
})

// GET /orders/ordId
router.get("/:orderId", (req, resp) => {
    db.query("SELECT o.id orderid, o.ordtime, o.status, i.itemid, i.quantity FROM orders o INNER JOIN orditems i ON o.id = i.orderid WHERE o.id=?",
        [req.params.orderId],
        (err, result) => {
            if(err)
                return resp.send(apiError(err))
            resp.send(apiSuccess(result))
        } 
    )
})

// POST /orders
router.post("", (req, resp) => {
    const {items} = req.body
    db.query("INSERT INTO orders(userid, ordtime, status) VALUES(?, NOW(), 'Pending')",
        [req.user.id], (err, result) => {
            if(err)
                return resp.send(apiError(err))
            if(result.affectedRows === 1) {
                const curOrdId = result.insertId
                const ordItems = items.map(i => [curOrdId, i.itemid, i.quantity])
                db.query("INSERT INTO orditems(orderid, itemid, quantity) VALUES ?",
                    [ordItems],
                    (err, result) => {
                        if(err)
                            return resp.send(apiError(err))
                        resp.send(apiSuccess("Order Placed"))
                    }
                )
            }
        }
    )
})

module.exports = router