create table cart(item_id serial primary key,
quantity int,
product_id int,
foreign key (product_id) references products(product_id)
)