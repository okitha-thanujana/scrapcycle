enum PickupStatus { scheduled, collected, missed, cancelled }

class Pickup {
  final String id;
  final DateTime dateTime;
  final PickupStatus status;
  final double? kgCollected;
  final int? pointsEarned;

  const Pickup({
    required this.id,
    required this.dateTime,
    required this.status,
    this.kgCollected,
    this.pointsEarned,
  });

  String get statusLabel {
    switch (status) {
      case PickupStatus.scheduled:
        return 'Scheduled';
      case PickupStatus.collected:
        return 'Collected';
      case PickupStatus.missed:
        return 'Missed';
      case PickupStatus.cancelled:
        return 'Cancelled';
    }
  }
}
