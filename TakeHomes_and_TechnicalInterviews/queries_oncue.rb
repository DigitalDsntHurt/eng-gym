# def self.get_orders_for_sew
# 	@orders = Order.where(cancelled_on: nil).where(standing_order: true) # gets all active standing orders
# 	@orders.select{|order| Crop.where(id: order.crop_id)[0].ideal_treatment_days == 0 } # filters standing orders on crops that do not require soak
# end

def self.get_orders_for_sew
	@orders = Order.where(cancelled_on: nil).where(standing_order: true)
  # .where(crop.ideal_treatment_days == 0 )
  # .join()
	@orders.select{|order| Crop.where(id: order.crop_id)[0].ideal_treatment_days == 0 }
end

SELECT * FROM orders JOIN crops ON crops.id=orders.crop_id WHERE cancelled_on IS null and standing_order=true and crops.ideal_treatment_days=0
