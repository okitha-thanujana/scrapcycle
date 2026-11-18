import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../theme/app_theme.dart';
import '../../widgets/green_button.dart';
import '../../widgets/stat_card.dart';
import '../../widgets/section_header.dart';
import '../../data/dummy_data.dart';
import '../../state/app_state.dart';
import '../impact/impact_screen.dart';

class RewardsScreen extends StatelessWidget {
  final VoidCallback onStateChanged;

  const RewardsScreen({super.key, required this.onStateChanged});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: AppColors.background,
        elevation: 0,
        title: Text(
          'Rewards',
          style: GoogleFonts.poppins(
            fontWeight: FontWeight.w600,
            color: AppColors.primary,
          ),
        ),
        actions: [
          TextButton.icon(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => const ImpactScreen()),
              );
            },
            icon: const Text('📊', style: TextStyle(fontSize: 16)),
            label: Text(
              'Impact',
              style: GoogleFonts.poppins(
                color: AppColors.primary,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        children: [
          _PointsBalanceCard(points: AppState.instance.greenPoints),
          const SizedBox(height: 16),
          _HowToEarnRow(),
          const SizedBox(height: 20),
          const SectionHeader(title: 'Redeem Rewards'),
          const SizedBox(height: 12),
          _RewardGrid(onStateChanged: onStateChanged),
          const SizedBox(height: 20),
          const SectionHeader(title: 'Points History'),
          const SizedBox(height: 12),
          _PointsHistoryList(),
          const SizedBox(height: 24),
        ],
      ),
    );
  }
}

class _PointsBalanceCard extends StatelessWidget {
  final int points;
  const _PointsBalanceCard({required this.points});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [AppColors.primary, Color(0xFF43A047)],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: AppColors.primary.withOpacity(0.35),
            blurRadius: 16,
            offset: const Offset(0, 6),
          ),
        ],
      ),
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Text('⭐', style: TextStyle(fontSize: 20)),
              const SizedBox(width: 8),
              Text(
                'Your GreenPoints',
                style: GoogleFonts.poppins(
                  color: Colors.white.withOpacity(0.9),
                  fontSize: 14,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Text(
            '${points.toString().replaceAllMapped(RegExp(r'(\d{1,3})(?=(\d{3})+(?!\d))'), (m) => '${m[1]},')}',
            style: GoogleFonts.poppins(
              color: Colors.white,
              fontSize: 52,
              fontWeight: FontWeight.w800,
              height: 1.1,
            ),
          ),
          const SizedBox(height: 6),
          Text(
            'Earn 10 pts per kg of waste collected',
            style: GoogleFonts.poppins(
              color: Colors.white.withOpacity(0.8),
              fontSize: 13,
            ),
          ),
        ],
      ),
    );
  }
}

class _HowToEarnRow extends StatelessWidget {
  const _HowToEarnRow();

  @override
  Widget build(BuildContext context) {
    final items = [
      ('♻️', 'Pickup', '10 pts/kg'),
      ('👥', 'Referral', '100 pts'),
      ('🎁', 'Bonus', 'Varies'),
    ];

    return Container(
      decoration: BoxDecoration(
        color: AppColors.accent.withOpacity(0.25),
        borderRadius: BorderRadius.circular(12),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: items.map((item) {
          return Column(
            children: [
              Text(item.$1, style: const TextStyle(fontSize: 22)),
              const SizedBox(height: 4),
              Text(
                item.$2,
                style: GoogleFonts.poppins(
                  fontWeight: FontWeight.w600,
                  fontSize: 12,
                  color: AppColors.primary,
                ),
              ),
              Text(
                item.$3,
                style: GoogleFonts.poppins(fontSize: 11, color: Colors.grey[600]),
              ),
            ],
          );
        }).toList(),
      ),
    );
  }
}

class _RewardGrid extends StatelessWidget {
  final VoidCallback onStateChanged;
  const _RewardGrid({required this.onStateChanged});

  @override
  Widget build(BuildContext context) {
    final rewards = DummyData.rewards;
    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: rewards.length,
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        crossAxisSpacing: 12,
        mainAxisSpacing: 12,
        childAspectRatio: 0.72,
      ),
      itemBuilder: (context, index) {
        final reward = rewards[index];
        return _RewardCard(reward: reward, onStateChanged: onStateChanged);
      },
    );
  }
}

class _RewardCard extends StatelessWidget {
  final dynamic reward;
  final VoidCallback onStateChanged;
  const _RewardCard({required this.reward, required this.onStateChanged});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: AppColors.surface,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppColors.accent.withOpacity(0.4)),
      ),
      padding: const EdgeInsets.all(14),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text(reward.emoji ?? '🎁', style: const TextStyle(fontSize: 36)),
          const SizedBox(height: 8),
          Text(
            reward.name,
            style: GoogleFonts.poppins(
              fontWeight: FontWeight.w700,
              fontSize: 13,
            ),
            textAlign: TextAlign.center,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
          const SizedBox(height: 4),
          Text(
            reward.description,
            style: GoogleFonts.poppins(fontSize: 11, color: Colors.grey[500]),
            textAlign: TextAlign.center,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
          ),
          const Spacer(),
          PointsChip(points: reward.pointsCost),
          const SizedBox(height: 8),
          SizedBox(
            width: double.infinity,
            child: ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: AppColors.primary,
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(vertical: 8),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
                textStyle: GoogleFonts.poppins(
                  fontSize: 12,
                  fontWeight: FontWeight.w600,
                ),
              ),
              onPressed: () {
                final state = AppState.instance;
                if (state.greenPoints >= reward.pointsCost) {
                  state.spendPoints(reward.pointsCost);
                  onStateChanged();
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      content: Text('Redeemed: ${reward.name}! Arriving in 2–3 days.'),
                      backgroundColor: AppColors.primary,
                      behavior: SnackBarBehavior.floating,
                    ),
                  );
                } else {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('Not enough GreenPoints!'),
                      backgroundColor: Colors.redAccent,
                      behavior: SnackBarBehavior.floating,
                    ),
                  );
                }
              },
              child: const Text('Redeem'),
            ),
          ),
        ],
      ),
    );
  }
}

class _PointsHistoryList extends StatelessWidget {
  const _PointsHistoryList();

  @override
  Widget build(BuildContext context) {
    final history = DummyData.pointsHistory;
    return Container(
      decoration: BoxDecoration(
        color: AppColors.surface,
        borderRadius: BorderRadius.circular(16),
      ),
      child: ListView.separated(
        shrinkWrap: true,
        physics: const NeverScrollableScrollPhysics(),
        itemCount: history.length,
        separatorBuilder: (_, __) => Divider(
          height: 1,
          color: Colors.grey[200],
          indent: 16,
          endIndent: 16,
        ),
        itemBuilder: (context, index) {
          final item = history[index];
          final isPositive = item.points > 0;
          return Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            child: Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        item.description,
                        style: GoogleFonts.poppins(
                          fontSize: 13,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      const SizedBox(height: 2),
                      Text(
                        item.date,
                        style: GoogleFonts.poppins(
                          fontSize: 11,
                          color: Colors.grey[500],
                        ),
                      ),
                    ],
                  ),
                ),
                Text(
                  isPositive ? '+${item.points}' : '${item.points}',
                  style: GoogleFonts.poppins(
                    fontSize: 14,
                    fontWeight: FontWeight.w700,
                    color: isPositive ? AppColors.primary : Colors.redAccent,
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
