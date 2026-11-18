import '../models/product.dart';

/// A simple in-memory application state.
/// Uses a callback pattern so individual screens can trigger rebuilds.
class AppState {
  // ── Singleton ──────────────────────────────────────────────────────────────
  AppState._();
  static final AppState instance = AppState._();

  // ── User info ──────────────────────────────────────────────────────────────
  String userName = 'Kasun Perera';
  String userPhone = '+94 77 123 4567';
  String userEmail = 'kasun@example.com';
  String userAddress = '45/2, Galle Road, Colombo 03';
  String userPlan = 'Premium';
  int greenPoints = 1240;

  // ── Cart ───────────────────────────────────────────────────────────────────
  final List<CartItem> cart = [];

  void addToCart(Product product) {
    final existing = cart.where((c) => c.product.id == product.id).firstOrNull;
    if (existing != null) {
      existing.quantity++;
    } else {
      cart.add(CartItem(product: product));
    }
  }

  void removeFromCart(String productId) {
    cart.removeWhere((c) => c.product.id == productId);
  }

  void clearCart() => cart.clear();

  int get cartCount => cart.fold(0, (sum, c) => sum + c.quantity);

  double get cartTotal => cart
      .where((c) => !c.payWithPoints)
      .fold(0.0, (sum, c) => sum + c.totalPrice);

  int get cartPointsTotal => cart
      .where((c) => c.payWithPoints)
      .fold(0, (sum, c) => sum + c.totalPoints);

  // ── Points ─────────────────────────────────────────────────────────────────
  bool spendPoints(int amount) {
    if (greenPoints >= amount) {
      greenPoints -= amount;
      return true;
    }
    return false;
  }

  void earnPoints(int amount) => greenPoints += amount;
}
