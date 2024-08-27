import db from "../connection.js"

export const getBunga =(req,res) => {
    const sql = "SELECT * FROM bunga";
    db.query(sql, (error, result) => {
        if(error){
            res.statusCode(400)
            res.send(error)
        }
        res.status(201)
        res.json(result)
    })
}
export const getBungaById = (req, res) => {
    const sql = `SELECT * FROM bunga WHERE id=${req.query.id}`;
    db.query(sql, (error, result) => {
      res.json(result);
    });
  };
  
  export const createBunga = (req, res) => {
    const { nama, deskripsi, harga } = req.body;
    const sql =
      "INSERT INTO bunga (nama, deskripsi, harga) VALUES (?,?,?)";
    db.query(sql, [nama, deskripsi, harga ], (error, result) => {
      if (error) {
        res.status(400);
        res.send(error);
      }
      res.status(201);
      res.json(result);
    });
  };
  
  export const updateBunga = (req, res) => {
    const id = req.query.id;
  
    const { nama, deskripsi, harga } = req.body;
    if (nama || deskripsi || harga) {
      const query = `UPDATE bunga SET nama = "${nama}", deskripsi = "${deskripsi}", harga = "${harga},"  WHERE  id=${id}`;
  
      db.query(query, (error, result) => {
        if (error) res.status(400).send(error.message);
        res.json(result);
      });
    } else {
      res.send("Isi body nya");
    }
  };
  
  export const deleteBunga = (req, res) => {
    const id = req.query.id;
    const sql = "DELETE FROM bunga WHERE id = ?";
    db.query(sql, [id], (error, result) => {
      if (error) {
        res.status(400);
        res.send(error);
      }
      res.status(200);
      res.json("data berhasil dihapus");
    });
  };