class NotificationItem {
  final String id;
  final String title;
  final String body;
  final DateTime createdAt;
  final String type; // pickup | reminder | alert | reward
  bool isRead;

  NotificationItem({
    required this.id,
    required this.title,
    required this.body,
    required this.createdAt,
    required this.type,
    this.isRead = false,
  });
}
