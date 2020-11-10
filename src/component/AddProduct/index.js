import React from 'react'

export default function AddProduct({setActive}) {
    return (
        <div className="modal" aria-labelledby="addProductLabel">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  {/* <h5 className="modal-title">{{data.id ? 'Update Product' : 'Add Product'}}</h5> */}
                  <h5 className="modal-title">Add Product</h5>
                  <button type="button" className="close" aria-label="Close" data-dismiss="modal">
                    {/* <span aria-hidden="true" @click="$emit('close')">&times;</span> */}
                    <span aria-hidden="true" onClick={setActive}>&times;</span>
                  </button>
                </div>
                <div className="modal-body p-4">
                  <form>
                    <div className="modalContent d-flex py-2">
                        <label className="col-sm-2 col-form-label h6">Name</label>
                        <div className="col-sm-10">
                            {/* <input type="text" className="form-control shadow" v-model="data.name"> */}
                            <input type="text" className="form-control shadow" />
                        </div>
                    </div>
                    <div className="modalContent d-flex py-2">
                        <label className="col-sm-2 col-form-label h6">Price</label>
                        <div className="col-sm-10">
                            {/* <input type="number" className="form-control shadow" v-model="data.price"> */}
                            <input type="number" className="form-control shadow" />
                        </div>
                    </div>
                    <div className="modalContent d-flex py-2">
                        <label className="col-sm-2 col-form-label h6">Image</label>
                        <div className="col-sm-10">
                            {/* <input type="file" className="form-control shadow" @change="onFileSelected"> */}
                            <input type="file" className="form-control shadow" />
                        </div>
                    </div>
                    <div className="modalContent d-flex py-2">
                        <label className="col-sm-2 col-form-label h6">Status</label>
                        <div className="col-sm-10 d-flex">
                            {/* <select className="form-group btn shadow" name="status" style="border:transparent;" v-model="data.idStatus"> */}
                            <select className="form-group btn shadow" name="status">
                              <option value="1">Available</option>
                              <option value="0">Sold Out</option>
                            </select>
                        </div>
                    </div>
                    <div className="modalContent d-flex py-2">
                        <label className="col-sm-2 col-form-label h6">Category</label>
                        <div className="col-sm-10">
                            <div className="dropdown d-flex">
                                <div className="form-group btn shadow">
                                  {/* <select name="category" style="border:transparent;" v-model="data.idCategory"> */}
                                  <select name="category">
                                    <option value="1">Drink</option>
                                    <option value="2">Food</option>
                                  </select>
                                </div>
                            </div>
                        </div>
                    </div>
                  </form>
                </div>
                 <div className="modal-footer">
                    {/* <button type="submit" className="btn btn-primary btn-block" data-dismiss="modal" @click="$emit('fire-event')">{{data.id ? 'Update' : 'Add'}}</button>
                    <button type="button" className="btn btn-secondary btn-block" data-dismiss="modal" @click="$emit('close')">Cancel</button> */}
                    <button type="submit" className="btn btn-primary btn-block" data-dismiss="modal">Add</button>
                    <button type="button" className="btn btn-secondary btn-block" onClick={setActive}>Cancel</button>
                 </div>
              </div>
            </div>
          </div>
    )
}
