import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import AnalysisItem, { AnalysisItemData } from './AnalysisItem';

interface AnalysisHistoryProps {
  items: AnalysisItemData[];
  onRefreshAnalysis: (id: string) => void;
}

const AnalysisHistory: React.FC<AnalysisHistoryProps> = ({ items, onRefreshAnalysis }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Analysis History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">No analyses yet. Try analyzing a query above.</p>
        ) : (
          items.map(item => (
            <AnalysisItem
              key={item.id}
              item={item}
              onRefresh={onRefreshAnalysis}
            />
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default AnalysisHistory; 