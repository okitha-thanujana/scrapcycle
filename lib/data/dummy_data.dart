import '../models/pickup.dart';
import '../models/product.dart';
import '../models/notification_item.dart';
import '../models/reward.dart';

class DummyData {
  // ── User ───────────────────────────────────────────────────────────────────
  static const String userName = 'Kasun Perera';
  static const String userPhone = '+94 77 123 4567';
  static const String userEmail = 'kasun@example.com';
  static const String userAddress = '45/2, Galle Road, Colombo 03';
  static const String userPlan = 'Premium';

  // ── Pickups ────────────────────────────────────────────────────────────────
  static List<Pickup> get pickups => [
        Pickup(
          id: 'p001',
          dateTime: DateTime.now().add(const Duration(days: 2, hours: 8)),
          status: PickupStatus.scheduled,
        ),
        Pickup(
          id: 'p002',
          dateTime: DateTime.now().subtract(const Duration(days: 5)),
          status: PickupStatus.collected,
          kgCollected: 4.2,
          pointsEarned: 42,
        ),
        Pickup(
          id: 'p003',
          dateTime: DateTime.now().subtract(const Duration(days: 12)),
          status: PickupStatus.collected,
          kgCollected: 3.8,
          pointsEarned: 38,
        ),
        Pickup(
          id: 'p004',
          dateTime: DateTime.now().subtract(const Duration(days: 19)),
          status: PickupStatus.missed,
        ),
        Pickup(
          id: 'p005',
          dateTime: DateTime.now().subtract(const Duration(days: 26)),
          status: PickupStatus.collected,
          kgCollected: 5.1,
          pointsEarned: 51,
        ),
      ];

  // ── Products ───────────────────────────────────────────────────────────────
  static const List<Product> products = [
    Product(
      id: 'prod001',
      name: 'GreenGold Compost — 5 kg',
      description: 'Premium organic compost made from local food waste.',
      price: 600,
      pointsPrice: 300,
      emoji: '🌱',
    ),
    Product(
      id: 'prod002',
      name: 'GreenGold Compost — 10 kg',
      description: 'Ideal for home gardens and balcony pots.',
      price: 1100,
      pointsPrice: 550,
      emoji: '🌿',
    ),
    Product(
      id: 'prod003',
      name: 'Compost Starter Kit',
      description: 'Everything you need to begin home composting.',
      price: 1800,
      pointsPrice: 900,
      emoji: '🪴',
    ),
    Product(
      id: 'prod004',
      name: 'Eco Gardening Gloves',
      description: 'Made from recycled materials. One size fits most.',
      price: 450,
      pointsPrice: 225,
      emoji: '🧤',
    ),
  ];

  // ── Notifications ──────────────────────────────────────────────────────────
  static List<NotificationItem> get notifications => [
        NotificationItem(
          id: 'n001',
          title: 'Pickup Reminder 🗓️',
          body: 'Your next pickup is in 2 days. Please place your bin outside by 7 AM.',
          createdAt: DateTime.now().subtract(const Duration(hours: 3)),
          type: 'reminder',
        ),
        NotificationItem(
          id: 'n002',
          title: 'Plan Renewal Alert 🔄',
          body: 'Your Premium plan renews in 5 days. LKR 3,000 will be charged.',
          createdAt: DateTime.now().subtract(const Duration(days: 1)),
          type: 'alert',
        ),
        NotificationItem(
          id: 'n003',
          title: 'Waste Collected! 🎉',
          body: 'Your waste (4.2 kg) was collected. You earned 42 GreenPoints!',
          createdAt: DateTime.now().subtract(const Duration(days: 5)),
          type: 'pickup',
          isRead: true,
        ),
        NotificationItem(
          id: 'n004',
          title: 'Reward Redeemed ✅',
          body: 'You redeemed 300 points for a 5 kg compost bag. Arriving in 2–3 days.',
          createdAt: DateTime.now().subtract(const Duration(days: 8)),
          type: 'reward',
          isRead: true,
        ),
      ];

  // ── Rewards ────────────────────────────────────────────────────────────────
  static const List<Reward> rewards = [
    Reward(
      id: 'r001',
      name: 'Free 5 kg Compost Bag',
      description: 'Redeem for a bag of GreenGold compost',
      pointsCost: 300,
      emoji: '🌱',
    ),
    Reward(
      id: 'r002',
      name: 'LKR 500 Renewal Discount',
      description: 'Off your next monthly renewal',
      pointsCost: 500,
      emoji: '💰',
    ),
    Reward(
      id: 'r003',
      name: 'Gardening Starter Kit',
      description: 'Seeds, gloves, and a small trowel',
      pointsCost: 800,
      emoji: '🪴',
    ),
    Reward(
      id: 'r004',
      name: 'Donate & Plant a Tree',
      description: 'Via GreenSL reforestation program',
      pointsCost: 100,
      emoji: '🌳',
    ),
  ];

  // ── Impact data ────────────────────────────────────────────────────────────
  static const double totalKgDiverted = 48.6;
  static const double co2Prevented = 29.2;
  static const double compostGenerated = 12.4;
  static const int totalPickups = 18;

  // Monthly kg data (Jan–Nov) for the bar chart
  static const List<double> monthlyKg = [
    3.2, 4.1, 5.0, 4.8, 6.2, 5.5, 4.2, 3.8, 5.1, 4.9, 6.3, 0.0
  ];
  static const List<String> monthLabels = [
    'J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'
  ];

  // Points history
  static const List<Map<String, dynamic>> pointsHistory = [
    {'desc': 'Pickup collected (4.2 kg)', 'points': 42, 'date': '12 Nov 2026'},
    {'desc': 'Pickup collected (3.8 kg)', 'points': 38, 'date': '5 Nov 2026'},
    {'desc': 'Reward redeemed — Compost bag', 'points': -300, 'date': '1 Nov 2026'},
    {'desc': 'Pickup collected (5.1 kg)', 'points': 51, 'date': '29 Oct 2026'},
    {'desc': 'Referral bonus', 'points': 100, 'date': '25 Oct 2026'},
    {'desc': 'Pickup collected (4.0 kg)', 'points': 40, 'date': '22 Oct 2026'},
  ];

  // FAQ
  static const List<Map<String, String>> faqs = [
    {
      'q': 'What can I put in the bin?',
      'a':
          'Fruit peels, vegetable scraps, cooked food leftovers, eggshells, tea bags, coffee grounds, and bread.',
    },
    {
      'q': 'What should I NOT put in the bin?',
      'a':
          'Plastic bags, styrofoam, diapers, chemicals, oil/grease, meat bones (small amounts of meat are OK), and non-biodegradable waste.',
    },
    {
      'q': 'How is GreenPoints calculated?',
      'a': 'You earn 10 GreenPoints per kilogram of food waste collected.',
    },
    {
      'q': 'Can I reschedule a pickup?',
      'a':
          'Yes! You can reschedule up to 24 hours before your scheduled pickup time via the Schedule tab.',
    },
    {
      'q': 'How long does delivery take for shop orders?',
      'a': 'Orders are delivered within 2–3 business days within Colombo.',
    },
  ];
}
