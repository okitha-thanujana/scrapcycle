class Product {
  final String id;
  final String name;
  final String description;
  final double price;
  final int? pointsPrice;
  final String emoji;

  const Product({
    required this.id,
    required this.name,
    required this.description,
    required this.price,
    this.pointsPrice,
    required this.emoji,
  });
}

class CartItem {
  final Product product;
  int quantity;
  bool payWithPoints;

  CartItem({
    required this.product,
    this.quantity = 1,
    this.payWithPoints = false,
  });

  double get totalPrice => product.price * quantity;
  int get totalPoints => (product.pointsPrice ?? 0) * quantity;
}
