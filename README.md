# Smart Home Control Center

Мини проект для практики оптимизации в React: useMemo, useCallback и React.memo.

## Запуск
```bash
npm i
npm run dev
```

## Идеи для оптимизации
- Сделать tickSensors так, чтобы неизменившиеся датчики возвращались теми же объектами
- Обернуть SensorTile в React.memo
- Зафиксировать onTogglePin через useCallback
- Мемоизировать тяжелые вычисления в RulesPanel через useMemo
