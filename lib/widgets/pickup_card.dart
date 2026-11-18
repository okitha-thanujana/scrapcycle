import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../models/pickup.dart';
import '../theme/app_theme.dart';
import 'green_button.dart';

class PickupCard extends StatelessWidget {
  final Pickup pickup;
  final bool isNext;

  const PickupCard({super.key, required this.pickup, this.isNext = false});

  Color get _statusColor {
    switch (pickup.status) {
      case PickupStatus.scheduled:
        return AppColors.blue;
      case PickupStatus.collected:
        return AppColors.primary;
      case PickupStatus.missed:
        return AppColors.error;
      case PickupStatus.cancelled:
        return AppColors.textSecondary;
    }
  }

  @override
  Widget build(BuildContext context) {
    if (isNext) return _buildNextPickupCard(context);
    return _buildHistoryTile();
  }

  Widget _buildNextPickupCard(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [AppColors.primary, AppColors.primaryLight],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: AppColors.primary.withOpacity(0.3),
            blurRadius: 16,
            offset: const Offset(0, 6),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(Icons.local_shipping_outlined,
                  color: Colors.white, size: 20),
              const SizedBox(width: 8),
              Text(
                'Next Pickup',
                style: const TextStyle(
                  color: Colors.white70,
                  fontSize: 13,
                  fontWeight: FontWeight.w500,
                ),
              ),
              const Spacer(),
              StatusBadge(
                label: pickup.statusLabel,
                color: Colors.white,
              ),
            ],
          ),
          const SizedBox(height: 12),
          Text(
            DateFormat('EEEE, d MMMM').format(pickup.dateTime),
            style: const TextStyle(
              color: Colors.white,
              fontSize: 20,
              fontWeight: FontWeight.w700,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            DateFormat('h:00 a – h:30 a').format(pickup.dateTime),
            style: const TextStyle(color: Colors.white70, fontSize: 14),
          ),
        ],
      ),
    );
  }

  Widget _buildHistoryTile() {
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
      decoration: BoxDecoration(
        color: AppColors.surface,
        borderRadius: BorderRadius.circular(14),
      ),
      child: Row(
        children: [
          Container(
            width: 42,
            height: 42,
            decoration: BoxDecoration(
              color: _statusColor.withOpacity(0.1),
              borderRadius: BorderRadius.circular(12),
            ),
            child: Icon(
              pickup.status == PickupStatus.collected
                  ? Icons.check_circle_outline
                  : pickup.status == PickupStatus.missed
                      ? Icons.cancel_outlined
                      : Icons.schedule_outlined,
              color: _statusColor,
              size: 20,
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  DateFormat('EEE, d MMM y').format(pickup.dateTime),
                  style: const TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w600,
                    color: AppColors.textPrimary,
                  ),
                ),
                if (pickup.kgCollected != null)
                  Text(
                    '${pickup.kgCollected} kg collected · +${pickup.pointsEarned} pts',
                    style: const TextStyle(
                      fontSize: 12,
                      color: AppColors.textSecondary,
                    ),
                  ),
              ],
            ),
          ),
          StatusBadge(label: pickup.statusLabel, color: _statusColor),
        ],
      ),
    );
  }
}
